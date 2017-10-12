//
//  BookTableViewCell.swift
//  Reader
//
//  Created by 孙雨 on 2017/10/12.
//  Copyright © 2017年 ysun. All rights reserved.
//

import UIKit

class BookTableViewCell: UITableViewCell {
    
    //MARK: Properties
    @IBOutlet weak var titleLabel: UILabel!
    @IBOutlet weak var authorLabel: UILabel!
    

    override func awakeFromNib() {
        super.awakeFromNib()
        // Initialization code
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }

}
