import { AppProps } from 'next/app'
import { NextPageWithLayout } from './nextPageWithLayoutType'

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}
