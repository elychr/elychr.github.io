import React from "react";
import { lightBlue } from '@material-ui/core/colors';
import { Cloud, Web } from '@material-ui/icons';
import SimpleCard from './components/card';
import { FlexGrid } from './components/flexgrid';
import { Helmet } from "react-helmet";

function Spotify({title, link}){
    return <iframe title={title} src={link} width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
}

export default function Home() {
    return (
        <div style={{ flex: 1, display: 'flex' }} >
            <Helmet encodeSpecialCharacters titleTemplate="%s | Elyas Christiansen">
                <title>{'Home'}</title>
            </Helmet>
            <div className='content' style={{ flex: 1 }}>
                <div style={{ flex: 1, flexDirection: 'row' }}>
                    <Spotify title='Bumpin' link='https://open.spotify.com/embed/playlist/5pQAHeeBKO5dvEXe2eHX3t' />
                    <Spotify title='Bangin' link='https://open.spotify.com/embed/playlist/3LZa024XGnTtORToEm7ENU' />
                </div>
                <FlexGrid
                    data={[
                        { site: 'Core Building Protection', API: 'https://api.corebp.co.nz/admin', WEB: 'https://corebp.co.nz/' },
                        { site: 'Core IT Business Solutions', API: 'https://api.cibs.co.nz/admin', WEB: 'https://cibs.co.nz/' },
                        { site: 'Sparkles & Unicorns Pony Parties', API: 'https://api.supony.co.nz/admin', WEB: 'https://supony.nz/' },
                    ]}
                    noResize
                    cols={2}
                    renderItem={e => (
                        <SimpleCard
                            site={e?.site}
                            buttons={[
                                { label: 'API', icon: <Cloud style={{ color: lightBlue[500] }} />, onClick: () => window.open(e?.API, '_blank', 'noopener,noreferrer') },
                                { label: 'WEBSITE', icon: <Web style={{ color: lightBlue[500] }} />, onClick: () => window.open(e?.WEB, '_blank', 'noopener,noreferrer') }
                            ]}
                        />
                    )}
                />
            </div>
        </div>
    )
}