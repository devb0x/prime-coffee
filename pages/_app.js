import { Provider } from "react-redux"
import store from "../store"

import Layout from "../components/Layout/Layout"
import '../styles/globals.css'
import { AnimatePresence } from "framer-motion"

function MyApp({ Component, pageProps }) {

  return (
    <Provider store={store}>
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} />
        </AnimatePresence>
      </Layout>
    </Provider>
  )
}

export default MyApp
