import React, {Component} from 'react';


const Tasks = (props) => {
    return (                
    <ul>
        {
            props.tasks.map(e => {
                return <li key={e.id} 
                    onClick={ () => this.toogle(e)} 
                    style={{
                        textDecoration : e.done ? "line-through" : "none"
                    }}>
                    {e.text}
                    </li>
            })
        }
    </ul>  
    )
}

// componentes que possuem metodos que observam e alteram o estado baseado em eventos sao containers
class Todo extends Component {

    // sempre que utilizar o constructor deve
    // passar props e chamar super(props)
    constructor(props) {
        super(props)
        this.state = {
            text : '',
            id : '',
            tasks : []
        }
    }

    handleChange(e) {
        this.setState({
            id : new Date(),
            text : e.target.value
        })
    }

    handleClick() {
        let {text, id, tasks} = this.state

        this.setState(
            {
                text : '',
                id : '',
                tasks : tasks.concat( {
                    id,
                    text
                }),
            }
        )
    }

    toogle(task) {
        this.setState(prev => ({
            tasks: prev.tasks.map(t => {
                if (t.id === task.id) {
                    return {
                        ...t,
                        done : !t.done
                    }
                }
                return t
            })
        }))
    }

    render () {
        return (
            <div>
                <br/>
                <input value={this.state.text}
                    onChange={e => this.handleChange(e)}
                />

                <button onClick={() => this.handleClick()}>
                    Enviar
                </button>

        

                <Tasks tasks = {this.state.tasks}/>      

                {JSON.stringify(this.state)}

            </div>
        )
    }

}

export default Todo