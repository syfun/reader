//
//  Book.swift
//  Reader
//
//  Created by 孙雨 on 2017/10/12.
//  Copyright © 2017年 ysun. All rights reserved.
//

import UIKit

class Book {
    //MARK: Properties
    
    var id: String
    var title: String
    var cat: String?
    var author: String
    var shortIntro: String?
    var lastChapter: String?
    var wordCount: Int?
    
    //MARK: Initialization
    init?(id: String, title: String, cat: String?, author: String, shortIntro: String?, lastChapter: String?, wordCount: Int?) {
        guard !id.isEmpty && !title.isEmpty else {
            return nil
        }
        
        self.id = id
        self.title = title
        self.cat = cat
        self.author = author
        self.shortIntro = shortIntro
        self.lastChapter = lastChapter
        self.wordCount = wordCount
    }
}
