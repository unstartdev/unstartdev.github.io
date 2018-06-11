#!/usr/bin/env bash
TIMENOW=`date "+%Y-%m-%d %T %z"`
TIMEFILE=`date +%Y-%m-%d`
echo "What is this?"
echo "Type(post\page):"
read whatisthis
case $whatisthis in
  post )
  echo "Input new post\'s title:"
  read _post_title
  echo "Input new post\'s categories:"
  read _post_categories
  touch ./_posts/${TIMEFILE}-${_post_title}.md
  echo "---" >> ./_posts/${TIMEFILE}-${_post_title}.md
  echo "layout: post" >> ./_posts/${TIMEFILE}-${_post_title}.md
  echo "title: ${_post_title}" >> ./_posts/${TIMEFILE}-${_post_title}.md
  echo "date: ${TIMENOW}" >> ./_posts/${TIMEFILE}-${_post_title}.md
  echo "categories: ${_post_categories}" >> ./_posts/${TIMEFILE}-${_post_title}.md
  echo "---" >> ./_posts/${TIMEFILE}-${_post_title}.md
  if [ -s ./_posts/${TIMEFILE}-${_post_title}.md ]
  then
    echo "Created: ./_posts/${TIMEFILE}-${_post_title}.md"
  else
    echo "Script Error!"
    exit 1
  fi
  unset _post_title
  unset _post_categories
    ;;
  page )
  echo "Input new page\'s title:"
  read _page_title
  echo "Input new page\'s permalink"
  read _page_permalink
  touch ./${_page_title}.md
  echo "---" >> ./${_page_title}.md
  echo "layout: page" >> ./${_page_title}.md
  echo "title: ${_page_title}" >> ./${_page_title}.md
  echo "permalink: ${_page_permalink}" >> ./${_page_title}.md
  echo "---" >> ./${_page_title}.md
  if [ -s ./${_page_title}.md ]
  then
    echo "Created: ./${_page_title}.md"
  else
    echo "Script Error!"
    exit 1
  fi
  unset _page_title
  unset _page_permalink
esac
unset whatisthis
unset TIMENOW
unset TIMEFILE
exit
