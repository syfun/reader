import React from 'react';
import { Button } from 'react-native';

import db from '../storage';
import { HOST } from '../constants';

export default class ChapterLink extends React.Component {

  jump = () => {
    const { book, chapter, navigation } = this.props;
    if (chapter) {
      const url = `${HOST}/mix-toc/${book._id}`;
      fetch(url).then(resp => resp.json())
        .then(resp => {
          const chapters = resp.mixToc.chapters;
          const current = { index: chapter.index, ...chapters[chapter.index] };
          let next = {}
          if (chapters.length > (chapter.index + 1)) {
            next = { index: chapter.index + 1, ...chapters[chapter.index + 1] }
          }
          let prefix = {}
          if (chapter.index > 0) {
            prefix = { index: chapter.index - 1, ...chapters[chapter.index - 1] }
          }
          navigation.navigate('Content', { prefix, current, next, book });
        })
    } else {
      alert('No content')
    }
  }

  render() {
    const { name } = this.props;
    return (
      <Button title={name} onPress={this.jump} />
    )
  }
}
