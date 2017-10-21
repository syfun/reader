//
//  BookSearchTableViewCell.swift
//  Reader
//
//  Created by yunsung on 2017/10/13.
//  Copyright © 2017年 ysun. All rights reserved.
//

import UIKit

class BookSearchTableViewCell: UITableViewCell {
    //MARK: Properties
    
    @IBOutlet weak var bookItem: BookItem!
    
    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }

}
