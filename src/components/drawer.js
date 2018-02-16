import React from 'react'

import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import ActionHome from 'material-ui/svg-icons/action/home'
import ContactIcon from 'material-ui/svg-icons/communication/contact-mail'
import FontIcon from 'material-ui/FontIcon'

import {
    pink500,
    purple600,
    limeA400,
    tealA400,
    cyan500,
    deepOrange500
} from 'material-ui/styles/colors'

export const AppDrawer = (props) => {
    return (
        <Drawer
            docked={false}
            open={props.open}
            onRequestChange={open => props.onToggle(open)}
        >
            <MenuItem
                leftIcon={
                    <ActionHome
                        color={pink500}
                        hoverColor={purple600}
                    />
                }
            >
                Главная 
            </MenuItem>
            <MenuItem
                leftIcon={
                    <ContactIcon
                        color={limeA400}
                        hoverColor={tealA400}
                    />
                }
            >
                Контакты
            </MenuItem>
            <MenuItem
                rightIcon={
                    <FontIcon
                        className="material-icons"
                        color={deepOrange500}
                        hoverColor={cyan500}
                    >
                        help
                    </FontIcon>
                }
            >
                О нас
            </MenuItem>
            <MenuItem
                rightIcon={
                    <FontIcon
                        className="material-icons"
                        color={cyan500}
                        hoverColor={deepOrange500}
                    >
                        settings_phone
                    </FontIcon>
                }
            >
                Написать нам
            </MenuItem>
        </Drawer>
    )
}