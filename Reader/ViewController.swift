//
//  ViewController.swift
//  Reader
//
//  Created by yunsung on 2017/10/12.
//  Copyright © 2017年 ysun. All rights reserved.
//

import UIKit

class ViewController: UIViewController, UITextFieldDelegate {
    //MARK: Properties
    @IBOutlet weak var bookNameText: UITextField!
    
    var bookName: String?

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    //MARK: UITextFieldDelegate
    func textFieldShouldReturn(_ textField: UITextField) -> Bool {
        return true
    }
    
    func textFieldDidEndEditing(_ textField: UITextField) {
        bookName = textField.text
    }
    //MARK: Actions
    @IBAction func searchBook(_ sender: UIButton) {
        Reader.searchBook("圣墟")
    }
    
}

