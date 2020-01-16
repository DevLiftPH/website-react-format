import React from 'react'
import { Container, CssBaseline, List, ListItem, Divider,
    ListItemText, ListSubheader, Typography, Paper 
    } from '@material-ui/core';


const styles = {
    nested: {
        fontFamily: 'Raleway',
        fontSize: '17px',
        color: '#454545',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    Typography: {
        title: {
            fontFamily: 'Raleway',
            fontSize: '17px',
            color: '#802bb1',
            fontWeight: 'bold'
        },
        description: {
            fontSize: '15px',
            fontFamily: 'Raleway',
            fontWeight: '600',
            marginLeft: '2em',
            marginTop: -20,
            color: '#454545'
        }
    }
}

export default props => 
    <div>
        <CssBaseline />
        <Container maxWidth="sm">
            <Paper>
                <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader" style={styles.nested}>
                    Scheduled Seminars, Trainings and Bootcamps
                    </ListSubheader>
                }
                >
                    <Divider />
                    <ListItem button>
                        <ListItemText>
                            <Typography style={styles.Typography.title}>November 17-21, 2019 | Online Training via Zoom</Typography>
                            <Typography style={styles.Typography.description}><br />- Materialize CSS Framework | 8:00am to 5:00pm</Typography>
                        </ListItemText>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                    <ListItemText>
                            <Typography style={styles.Typography.title}>November 21-30, 2019 | BootCamp</Typography>
                            <Typography style={styles.Typography.description}>
                                <br />- NodeJS, MongoDB and Express | 8:00am to 5:00pm
                                <br />- American Tesol Institute, 707 Shaw Blvd., Brgy. Kapitolyo, Pasig City
                            </Typography>
                        </ListItemText>
                    </ListItem>
                </List>
            </Paper>
        </Container>
        
    </div>