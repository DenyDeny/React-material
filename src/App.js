import React, { Component } from 'react'

import { AppHeader } from './components/header'
import { AppDrawer } from './components/drawer'
import { AppButtons } from './components/buttons'
import { AppList } from './components/list'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isDrawerOpen: false,
      itemsList: [
        {
          name: 'Элемент 1',
          description: 'Описание 1',
          checked: false
        },
        {
          name: 'Элемент 2',
          description: 'Описание 2',
          checked: false
        },
        {
          name: 'Элемент 3',
          description: 'Описание 3',
          checked: false
        },
        {
          name: 'Элемент 4',
          description: 'Описание 4',
          checked: false
        }
      ]
    }

  }

  onToggle(open) {
    this.setState({
      isDrawerOpen: open
    })
  }

  onCheck(checked, idx) {
    let {itemsList} = this.state
    itemsList[idx].checked = checked
    this.setState({
      itemsList
    })
  }

  onDelete() {
    let itemsList = this.state.itemsList
      .filter(i => !i.checked)

    this.setState({
      itemsList
    })
  }

  render() {
    return (
      <div>
        <AppHeader
          onLeftIconClick={() => this.setState({isDrawerOpen: true})}
        />
        <AppDrawer
          onToggle={(open) => this.onToggle(open)}
          open={this.state.isDrawerOpen}
        />
        <div className="container">
          <AppButtons
            itemsChecked={
              this.state.itemsList
                .map(i => i.checked)
                .filter(i => i)
            }
            onDelete={() => this.onDelete()}
          />
          <AppList
            items={this.state.itemsList}
            onCheck={(checked, idx) => this.onCheck(checked, idx)}
          />
        </div>
      </div>
    )
  }
}
