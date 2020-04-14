import React from 'react';
import ReactDOM from 'react-dom';
import { Epic, View, Panel, PanelHeader, Tabbar, TabbarItem } from '@vkontakte/vkui';
import Icon28GlobeOutline from '@vkontakte/icons/dist/28/globe_outline';
import Icon28ListOutline from '@vkontakte/icons/dist/28/list_outline';

import '@vkontakte/vkui/dist/vkui.css';

class Example extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      activeStory: 'map'
    };
    this.onStoryChange = this.onStoryChange.bind(this);
  }

  onStoryChange (e) {
    this.setState({ activeStory: e.currentTarget.dataset.story })
  }

  render () {
    return (
      <Epic activeStory={this.state.activeStory} tabbar={
        <Tabbar>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'feed'}
            data-story="map"
            text="Просмотр"
          ><Icon28GlobeOutline/></TabbarItem>
          <TabbarItem
            onClick={this.onStoryChange}
            selected={this.state.activeStory === 'chapter'}
            data-story="chapter"
            text="Главы"
          ><Icon28ListOutline/></TabbarItem>
        </Tabbar>
      }>
        <View id="map" activePanel="map">
          <Panel id="map">
            <PanelHeader>Карта</PanelHeader>
          </Panel>
        </View>
        <View id="chapter" activePanel="chapter">
          <Panel id="chapter">
            <PanelHeader>Выбор главы</PanelHeader>
          </Panel>
        </View>
      </Epic>
    )
  }
}

ReactDOM.render(<Example/>, document.getElementById('root'));