import React from 'react'
import { Container, CssBaseline, TextField, Grid, Button, Paper, List, ListItem, Typography } from '@material-ui/core/'


const styles = {
    icon: {
        color: '#545454'
    },
    paper: {
        padding: 15,
        textAlign: 'center'
    },
    title: {
        fontFamily: 'Raleway',
        color: '#545454',
        fontSize: '15px',
        fontWeight: 'bold'
    },
    button: {
        fontFamily: 'Raleway',
        fontWeight: 'bold',
        marginTop: 30,
        marginLeft: 10
    }
    
}

export default props => 
    <div>
        <CssBaseline />
        <Container maxWidth="sm">
        <Paper style={styles.paper}>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} >
                <Typography variant="subtitle2" style={styles.title}>Personal Information</Typography>
                    <List>
                        <ListItem>
                            <TextField id="input-with-icon-grid" label="Firstname" />
                        </ListItem>
                        <ListItem>
                            <TextField id="input-with-icon-grid" label="Lastname" />
                        </ListItem>
                        <ListItem>
                            <TextField id="input-with-icon-grid" label="Birthdate" />
                        </ListItem>
                        <br />
                        <Typography variant="subtitle2" style={styles.title}>Address</Typography>
                        <ListItem>
                            <TextField id="input-with-icon-grid" label="City" />
                        </ListItem>
                        <ListItem>
                            <TextField id="input-with-icon-grid" label="ZipCode" />
                        </ListItem>
                    </List>
                
            </Grid>
            <Grid item xs={12} sm={12} md={6} >
                <Typography variant="subtitle2" style={styles.title}>Account Credentials</Typography>
                    <List>
                        <ListItem>
                            <TextField id="input-with-icon-grid" label="Email Address" />
                        </ListItem>
                        <ListItem>
                            <TextField id="input-with-icon-grid" label="Current Password" />
                        </ListItem>
                        <ListItem>
                            <TextField id="input-with-icon-grid" label="Password" />
                        </ListItem>
                    </List>
            </Grid>
        </Grid>
        <Button variant="contained" color="secondary" style={styles.button}>
            Reset
        </Button>
        <Button variant="contained" color="primary" style={styles.button}>
            Update
      </Button>
        </Paper>
        </Container>
    </div>