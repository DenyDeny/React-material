import React from 'react'

import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Checkbox from 'material-ui/Checkbox'
import ActionFavorite from 'material-ui/svg-icons/action/favorite'
import ActionFavoriteBorder from 'material-ui/svg-icons/action/favorite-border'

export const AppList = ({ items, onCheck }) => {
    return (
        <List>
            {items.map((item, id) => (
                <div key={id}>
                    <ListItem
                        primaryText={item.name}
                        secondaryText={item.description}
                        leftCheckbox={
                            <Checkbox
                                checkedIcon={<ActionFavorite />}
                                uncheckedIcon={<ActionFavoriteBorder />}
                                checked={item.checked}
                                onCheck={(event, isInputChecked) => onCheck(isInputChecked, id)}
                            />
                        }
                    />
                    <Divider />
                </div>
            ))}
        </List>
    )
}