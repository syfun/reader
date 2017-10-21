//
//  BookItem.swift
//  Reader
//
//  Created by yunsung on 2017/10/16.
//  Copyright © 2017年 ysun. All rights reserved.
//

import UIKit

@IBDesignable class BookItem: UIStackView {
    
    //MARK: Properties
    
    private var titleLabel: UILabel = UILabel(frame: CGRect(x: 0, y: 0, width: 100, height: 10))
    private var authorLabel: UILabel = UILabel(frame: CGRect(x: 0, y: 0, width: 100, height: 50))
    @IBInspectable var title: String = "title" {
        didSet {
            titleLabel.text = title
        }
    }
    @IBInspectable var author: String = "author" {
        didSet {
            authorLabel.text = author
        }
    }
    
    //MARK: Initialization
    
    override init(frame: CGRect) {
        super.init(frame: frame)
        setupLabels()
    }
    
    required init(coder: NSCoder) {
        super.init(coder: coder)
        setupLabels()
    }
    
    //MARK: Private Methods
    
    private func setupLabels() {
        titleLabel.text = title
        authorLabel.text = author
        addArrangedSubview(titleLabel)
        addArrangedSubview(authorLabel)
    }
    /*
    // Only override draw() if you perform custom drawing.
    // An empty implementation adversely affects performance during animation.
    override func draw(_ rect: CGRect) {
        // Drawing code
    }
    */

}
