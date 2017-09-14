# 书籍API

## 搜索书籍

```
url: api.zhuishushenqi.com/book/fuzzy-search
method: GET
params:
  query:关键词
  start:结果开始位置
  limit:结果最大数量
example:
GET api.zhuishushenqi.com/book/fuzzy-search?query=一念&start=0&limit=2
```

## 书籍详情

```
url: api.zhuishushenqi.com/book/书籍id(_id)
method: GET
params:
  无
example:
GET api.zhuishushenqi.com/book/57206c3539a913ad65d35c7b
```

## 书源

> 优质书源已被加密，不建议使用！

```
url: api.zhuishushenqi.com/toc
method: GET
params:
  view: summary
  book: 书籍id
example:
GET api.zhuishushenqi.com/toc?view=summary&book=57206c3539a913ad65d35c7b
```

## 章节列表

```
url: api.zhuishushenqi.com/toc/书源ID?view=chapters
method: GET
params:
  view chapters
example:
GET api.zhuishushenqi.com/toc/577b477dbd86a4bd3f8bf1b2?view=chapters
```

## 混合源章节列表

```
url: api.zhuishushenqi.com/mix-toc/书籍ID
method: GET
example:
http://api.zhuishushenqi.com/mix-toc/5816b415b06d1d32157790b1
```

## 章节内容

```
url: chapter2.zhuishushenqi.com/chapter/章节link(从章节列表中获得)?k=2124b73d7e2e1945&t=1468223717
method: GET
params:
  k: 2124b73d7e2e1945
  t: 1468223717
example:
GET chapter2.zhuishushenqi.com/chapter/http%3a%2f%2fbook.my716.com%2fgetBooks.aspx%3fmethod%3dcontent%26bookId%3d1127281%26chapterFile%3dU_1212539_201701211420571844_4093_2.txt?k=2124b73d7e2e1945&t=1468223717
```

## 自动补全

```
url: api.zhuishushenqi.com/book/auto-complete
method: GET
params:
  query: 关键词
example:
GET api.zhuishushenqi.com/book/auto-complete?query=一念
```
