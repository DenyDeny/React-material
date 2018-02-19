import React from 'react'

import TextField from 'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'

export class AppForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            name: "",
            description: "",
            errors: {
                name: "",
                description: ""
            }
        }
    }

    render() {
        return (
            <div>
                <TextField
                    hintText="Название"
                    floatingLabelText="Введите название"
                    fullWidth={true}
                    errorText={this.state.errors.name}
                    onChange={(event, name) => this.setState({name})}
                />
                <TextField
                    hintText="Описание"
                    floatingLabelText="Введите описание"
                    fullWidth={true}
                    errorText={this.state.errors.description}
                    onChange={(event, description) => this.setState({description})}
                />
                <FlatButton
                    label="Добавить элемент"
                    secondary={true}
                    onClick={this.onAdd.bind(this)}
                />
            </div>
        )
    }

    onAdd() {
        let errors = {}

        if (!this.state.name) errors.name = 'Имя не может быть пустым'
        if (!this.state.description) errors.description = 'Описание не может быть пустым'

        if (errors.name || errors.description) {
            this.setState({
                errors
            })
            return
        }

        this.props.onAdd({
            name: this.state.name,
            description: this.state.description,
            checked: false
        })

        this.setState({
            name: "",
            description: "",
            errors: {
                name: "",
                description: ""
            }
        })
    }
}