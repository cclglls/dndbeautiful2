import React from 'react';
import styled from 'styled-components'
import {Draggable} from 'react-beautiful-dnd'
import {Icon} from 'antd';

const Container = styled.div`
    border: 1px solid lightgrey;
    border-radius: 5px;
    padding: 8px;
    margin-bottom: 8px;
    background-color: ${props => (props.isDragging ? 'skyblue' : 'white')};
    display: flex;
    justify-content: space-between
 
`;

const Handle = styled.div`
    width: 25px;
    height: 25px;
    border: 1px solid lightgrey
    border-radius: 5px;
    margin: 8px;
    display: flex;
    justify-content: center;
    align-item: center
`;


// background-color: #5b8c00;


export default class Task extends React.Component {
    render() {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {(provided, snapshot) => (
            <Container 
                {...provided.draggableProps}                  
                ref={provided.innerRef}
                isDragging={snapshot.isDragging}
            > 
         
                
                {this.props.task.content}
                
                <Icon type="drag" {...provided.dragHandleProps} style={{fontSize: "20px", color: 'grey'}}/>
              
           
            </Container>
                )}         
            </Draggable>
        );
    }
}

