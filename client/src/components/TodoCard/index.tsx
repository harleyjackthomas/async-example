import React from "react";

// Entities
import { Todo } from "src/entities/todo";

// Material
import Typography from "@material-ui/core/Typography";

// Styling
import { useStyles } from "./styles";

// Layout
import CardLayout from "src/layouts/Card";

export const TodoCard = ({ todo }: { todo: Todo }) => {
    const classes = useStyles();

    return (
        <CardLayout>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                { todo.title }
            </Typography>

            <Typography variant="body2" component="p">
                { todo.description }
            </Typography>
        </CardLayout>
    );
}