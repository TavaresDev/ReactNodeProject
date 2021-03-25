import React from 'react'

import Navigation from '../Navigation';
import Routes from '../Routes';
import NotificationProvider from '../Notifications';
import Footer from '../Footer';
import * as Styles from './styles'

const Layout = () => {
    return (

        <NotificationProvider className="d-flex flex-column" style={{ height: '10000px' }} >
            <Styles.Wraper>
                <Navigation />
                <Styles.Main>

                <Routes />
                </Styles.Main>
                <Styles.Footer>

                    <Footer />
                </Styles.Footer>
            </Styles.Wraper>
        </NotificationProvider>
    )
}

export default Layout
