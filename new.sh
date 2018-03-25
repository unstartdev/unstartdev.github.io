#!/usr/bin/env bash
TIMENOW=`date "+%Y-%m-%d %T %z"`
echo "Input new post layout"
read layout
echo "Input new post title"
read title
echo "Input new post categories"
read categories
touch ./_posts/`date +%Y-%m-%d`-$title.md
echo "---" >> ./_posts/`date +%Y-%m-%d`-$title.md
echo "layout: $layout" >> ./_posts/`date +%Y-%m-%d`-$title.md
echo "title: $title" >> ./_posts/`date +%Y-%m-%d`-$title.md
echo "date: $TIMENOW" >> ./_posts/`date +%Y-%m-%d`-$title.md
echo "categories: $categories" >> ./_posts/`date +%Y-%m-%d`-$title.md
echo "---" >> ./_posts/`date +%Y-%m-%d`-$title.md
echo "Created: ./_posts/`date +%Y-%m-%d`-$title.md"







