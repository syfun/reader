//
//  SearchViewController.swift
//  Reader
//
//  Created by 孙雨 on 2017/10/12.
//  Copyright © 2017年 ysun. All rights reserved.
//

import UIKit
import SwiftyJSON

class SearchViewController: UIViewController,UITextFieldDelegate, UITableViewDelegate, UITableViewDataSource {
    
    //MARK: Properties
    
    var books = [Book]()
//    var searchKey: String?
    
    @IBOutlet weak var searchText: UITextField!
    @IBOutlet weak var searchTable: UITableView!
    
    //MARK: Private Methods
    private func loadSampleBooks() {
        let book1 = Book(id: "1", title: "book1", cat: "cat1", author: "author1", shortIntro: "gg", lastChapter: "chapter1", wordCount: 2)
        let book2 = Book(id: "2", title: "book2", cat: "cat1", author: "author1", shortIntro: "gg", lastChapter: "chapter1", wordCount: 2)
        
        books.append(book1!)
        books.append(book2!)
    }
    
    //MARK: UITableViewDelegate
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return books.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "SearchTableViewCell", for: indexPath) as! BookSearchTableViewCell
        
        let book = books[indexPath.row]
        cell.titleLabel.text = book.title
        cell.authorLabel.text = book.author
        cell.shortIntroLabel.text = book.shortIntro
        return cell
    }
    
    //MARK: UITextFieldDelegate
    func textFieldShouldReturn(_ textField: UITextField) -> Bool {
        textField.resignFirstResponder()
        return true
    }
    
    func textFieldDidEndEditing(_ textField: UITextField) {
        let searchKey = textField.text
        searchBook(searchKey!) { resp in
            print("Request: \(String(describing: resp.request))")   // original url request
            print("Response: \(String(describing: resp.response))") // http url response
            print("Result: \(resp.result)")
            if let searchedBooks = JSON(resp.result.value!)["books"].array {
                self.books = []
                for b in searchedBooks {
                    let book = Book(id: b["_id"].stringValue, title: b["title"].stringValue, cat: b["cat"].stringValue, author: b["author"].stringValue, shortIntro: b["shortIntro"].stringValue, lastChapter: b["lastChapter"].stringValue, wordCount: b["wordCount"].intValue)
                    self.books.append(book!)
                }
                self.searchTable.reloadData()
            } else {
                print("No books.")
            }
        }
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        searchTable.delegate = self
        searchTable.dataSource = self
        
        searchText.delegate = self
        
//        loadSampleBooks()
        // Do any additional setup after loading the view.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    

    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destinationViewController.
        // Pass the selected object to the new view controller.
    }
    */

}
