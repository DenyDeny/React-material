import React, { Component } from 'react'

import { AppHeader } from './components/header'
import { AppDrawer } from './components/drawer'
import { AppButtons } from './components/buttons'
import { AppList } from './components/list'
import { AppForm } from './components/form'
import Dialog from 'material-ui/Dialog'
import Popover from 'material-ui/Popover'
import RaisedButton from 'material-ui/RaisedButton'
import DatePicker from 'material-ui/DatePicker'
import Snackbar from 'material-ui/Snackbar'

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isDrawerOpen: false,
      isPopoverOpen: false,
      popoverElement: null,
      isModalOpen: false,
      isSnackbarOpen: false,
      selectedDate: new Date(),
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

  onAdd(item) {
    let itemsList = this.state.itemsList
    itemsList.push(item)
    this.setState({
      itemsList,
      isPopoverOpen: false
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
            onAdd={(popoverElement) => this.setState({popoverElement, isPopoverOpen: true})}
            openModal={() => this.setState({isModalOpen: true})}
          />
          <Popover
            open={this.state.isPopoverOpen}
            anchorEl={this.state.popoverElement}
            anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
            targetOrigin={{horizontal: 'left', vertical: 'top'}}
            onRequestClose={() => this.setState({isPopoverOpen: false})}
            style={{width: 300, padding: "15px 20px"}}
          >
            <AppForm
              onAdd={this.onAdd.bind(this)}
            />
          </Popover>
          <AppList
            items={this.state.itemsList}
            onCheck={(checked, idx) => this.onCheck(checked, idx)}
          />
        </div>
        <Dialog
          actions={[
            <RaisedButton
              label="Ок"
              primary={true}
              onClick={() => this.setState({isModalOpen: false})}
            />
          ]}
          title="Выберите дату!"
          open={this.state.isModalOpen}
          onRequestClose={() => this.setState({isModalOpen: false})}
        >
          Modal window
          <DatePicker
            hintText="Выберите дату"
            defaultDate={this.state.selectedDate}
            formatDate={new window.Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'numeric',
              year: 'numeric',
            }).format}
            onChange={(nothing, selectedDate) => this.setState({selectedDate, isSnackbarOpen: true})}
            mode="landscape"
          />
        </Dialog>
        <Snackbar
          open={this.state.isSnackbarOpen}
          message={'' + this.state.selectedDate}
          action="Отмена"
          autoHideDuration={3000}
          onActionClick={() => this.setState({isSnackbarOpen: false})}
          onRequestClose={() => this.setState({isSnackbarOpen: false})}
        />
      </div>
    )
  }
}
