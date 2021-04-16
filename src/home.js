import React from "react";
import { lightBlue } from '@material-ui/core/colors';
import { Cloud, Web } from '@material-ui/icons';
import SimpleCard from './components/card';
import { FlexGrid } from './components/flexgrid';

export default function Home() {
    return (
        <div style={{ flex: 1, display: 'flex' }} >
            <div className='content' style={{ flex: 1 }}>

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
                                { label: 'API', icon: <Cloud style={{ color: lightBlue[500]}} />, onClick: () => window.open(e?.API,'_blank', 'noopener,resizable,scrollbars') },
                                { label: 'WEBSITE', icon: <Web style={{ color: lightBlue[500]}} />, onClick: () => window.open(e?.WEB,'_blank', 'noopener,resizable,scrollbars') }
                            ]}
                        />
                    )}
                />
            </div>
        </div>
    )
}