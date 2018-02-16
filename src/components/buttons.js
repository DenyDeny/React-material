import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import FontIcon from 'material-ui/FontIcon'
import ContentAdd from 'material-ui/svg-icons/content/add'

import {
    red700,
    deepOrange500
} from 'material-ui/styles/colors'

const style = {
    marginRight: 20
}

export const AppButtons = (props) => {
    console.log(props.itemsChecked)
    return (
        <div style={{
            marginBottom: 40
        }}
        >
            <RaisedButton
                label="Добавить элемент"
                primary={true}
                style={style}
            />
            <RaisedButton
                label="Удалить выбранные элементы"
                backgroundColor={red700}
                style={style}
                labelColor="#fff"
                disabled={props.itemsChecked.length === 0}
                onClick={() => props.onDelete()}
            />
            <RaisedButton
                href="https://google.com"
                target="_blank"
                label="Перейти на google"
                icon={
                    <FontIcon className="material-icons"
                    >
                        fingerprint
                    </FontIcon>
                }
            />

            <FloatingActionButton
                style={{
                    position: "fixed",
                    right: 50,
                    bottom: 50
                }}
                backgroundColor={deepOrange500}
            >
                <ContentAdd />
            </FloatingActionButton>
        </div>
    )
}