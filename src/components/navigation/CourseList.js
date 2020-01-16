import React from 'react'
import { CssBaseline, Grid, Paper, Typography, Divider } from '@material-ui/core';

const styles = {
    Paper: {
        padding: 15,
        fontFamily: 'Raleway'
    },
    Typography: {
        

        title: {
            fontFamily: 'Raleway',
            fontSize: '16px',
            fontWeight: 'bold',
            color: '#340e4a',
            marginBottom: '5px'
        },
        description: {
            fontFamily: 'Raleway',
            color: '#454545',
            fontSize: '15px',
            marginTop: 10
        }
    }
}

export default props => 


    <div>
        <CssBaseline />
        <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
                <Paper style={styles.Paper}>
                    <Typography style={styles.Typography.title}>
                        HTML AND CSS FUNDAMENTALS
                    </Typography>
                    <Divider />
                    <Typography style={styles.Typography.description}>
                        An introduction to the basic structures of HTML. How to use forms, tables, lists and designing elements using CSS
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} lg={6}>
                <Paper style={styles.Paper}>
                    <Typography style={styles.Typography.title}>
                        JAVASCRIPT FUNDAMENTALS, DOM AND OOP
                    </Typography>
                    <Divider />
                    <Typography style={styles.Typography.description}>
                        An introduction to the basic structures of HTML, how to use forms, tables and lists. Designing elements using CSS
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} lg={6}>
                <Paper style={styles.Paper}>
                    <Typography style={styles.Typography.title}>
                        MATERIALIZE CSS FRAMEWORK
                    </Typography>
                    <Divider />
                    <Typography style={styles.Typography.description}>
                        An introduction to the basic structures of HTML, how to use forms, tables and lists. Designing elements using CSS
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} lg={6}>
                <Paper style={styles.Paper}>
                    <Typography style={styles.Typography.title}>
                        BOOTSTRAP CSS FRAMEWORK
                    </Typography>
                    <Divider />
                    <Typography style={styles.Typography.description}>
                        An introduction to the basic structures of HTML, how to use forms, tables and lists. Designing elements using CSS
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} lg={6}>
                <Paper style={styles.Paper}>
                    <Typography style={styles.Typography.title}>
                        JAVASCRIPT PROMISES, CALLBACK, ASYNC-AWAIT
                    </Typography>
                    <Divider />
                    <Typography style={styles.Typography.description}>
                        An introduction to the basic structures of HTML, how to use forms, tables and lists. Designing elements using CSS
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} lg={6}>
                <Paper style={styles.Paper}>
                    <Typography style={styles.Typography.title}>
                        REACT LIBRARY
                    </Typography>
                    <Divider />
                    <Typography style={styles.Typography.description}>
                        An introduction to the basic structures of HTML, how to use forms, tables and lists. Designing elements using CSS
                    </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12} lg={6}>
                <Paper style={styles.Paper}>
                    <Typography style={styles.Typography.title}>
                        NODEJS, MONGODB and EXPRESS
                    </Typography>
                    <Divider />
                    <Typography style={styles.Typography.description}>
                        An introduction to the basic structures of HTML, how to use forms, tables and lists. Designing elements using CSS
                    </Typography>
                </Paper>
            </Grid>
        </Grid>
        
    </div>