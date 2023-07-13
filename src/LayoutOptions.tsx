import {IConfig, IRteParam} from "@contentstack/app-sdk/dist/src/RTE/types";

import { IRTE } from "@contentstack/app-sdk/dist/src/types";
import { Icon } from "@contentstack/venus-components";
import { RTEPlugin } from "@contentstack/app-sdk/dist/src/RTE";
import React from "react";
import { ReturnCbModalProps } from "@contentstack/venus-components/build/components/Modal/Modal";
import SelectModal from "./Modal";
import { cbModal } from "@contentstack/venus-components";

export const getLayoutOptions = (RTE: any) => {
    const LayoutOptions: RTEPlugin = RTE('highlight', (): IConfig => ({
        title: 'Layout Options',
        icon: <Icon style={{ padding: '0 6px' }} icon="Layout" size="original" />,
        render: (props: any) => {
            return <span style={{ background: 'rgba(251, 243, 219, 1)', fontSize: props.leaf['highlight']}}>{props.children}</span>
        },
        display: ['toolbar'],
        
        elementType: ['text']
    }));

    LayoutOptions.on('exec', (rte: IRteParam) => {
        //@ts-ignore
        if (!window.rte) {
            //@ts-ignore
            window.rte = rte;
        }
        const currentNode = rte.getNodes({
            //@ts-ignore
            path: rte.selection.get()?.anchor.path,
            offset: 0
        });
        if(currentNode){
            console.log(currentNode)
        }
        console.log()
        // rte.addMark('highlight', 40);
        cbModal({
            component: (props: ReturnCbModalProps) => (<SelectModal {...props} />),
            modalProps: {
              size: "max"
            }
          })
        
        // console.log(rte)
    })

    return LayoutOptions;
};

// rte.selection.get()

// [JAIM]E
// {
//     "anchor": {
//         "path": [
//             0,
//             0,
//             0
//         ],
//         "offset": 0
//     },
//     "focus": {
//         "path": [
//             0,
//             0,
//             0
//         ],
//         "offset": 4
//     }
// }