import React from "react";

// Material
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

// Styling
import { useStyles } from "./styles";

const CardLayout: React.FC = (props) => {
    const { children } = props;
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                { children }
            </CardContent>
        </Card>
    )
}

export default CardLayout;