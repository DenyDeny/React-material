import React from 'react'

import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import IconButton from 'material-ui/IconButton'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

import { indigo700, blueGrey50 } from 'material-ui/styles/colors'

const RightMenu = () => (
    <IconMenu
      iconButtonElement={
        <IconButton>
            <MoreVertIcon color={blueGrey50}/>
        </IconButton>
      }
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
        <MenuItem primaryText="Обновить" />
        <MenuItem primaryText="Помощь" />
        <MenuItem primaryText="Выйти" />
    </IconMenu>
);

export const AppHeader = (props) => {
    return (
        <AppBar
            title="Material UI application"
            style={{
                background: indigo700
            }}
            iconElementRight={<RightMenu />}
            onLeftIconButtonClick={() => props.onLeftIconClick()}
        />
    )
}