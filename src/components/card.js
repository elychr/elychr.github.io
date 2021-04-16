import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardActions, CardContent, Button as UIButton, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
        marginBottom: 10
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

function Button({ children, onClick, icon }) {
    return <UIButton size='large' variant='outlined' startIcon={icon ?? null} onClick={onClick} style={{ margin: 5 }}>{children}</UIButton>
}

export default function SimpleCard({ site = 'Core Building Protection', desc, buttons }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5" component="h2">{site}</Typography>
                <Typography variant="body2" component="p" className={classes.pos} color="textSecondary">{desc}</Typography>
            </CardContent>
            <CardActions>
                {buttons?.map(e => <Button icon={e?.icon} onClick={() => e?.onClick()}>{e?.label}</Button>)}                
            </CardActions>
        </Card>
    );
}
