import React from "react";

// Material
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

// Layout
import CardLayout from "src/layouts/Card";

// Styles
import { useStyles } from "./styles";

export default function AddTodoCard() {
    const classes = useStyles();



    return (
        <CardLayout>
            <Typography color="textSecondary" gutterBottom>
                Add Todo Item
            </Typography>

            <form className={classes.form}>
                <TextField id="todo-name" label="Name"/>
                <TextField id="todo-description" label="Description" />
            </form>

        </CardLayout>
    );
}