//
//  http.swift
//  reader
//
//  Created by yunsung on 2017/10/12.
//  Copyright © 2017年 ysun. All rights reserved.
//
//
import Alamofire

func searchBook(_ name: String, handler: @escaping (DataResponse<Any>) -> Void) {
    let parameters: Parameters = ["query": name, "start": 0, "limit": 5]
    Alamofire.request("http://api.zhuishushenqi.com/book/fuzzy-search", parameters: parameters).responseJSON { response in
        handler(response)
    }
}
