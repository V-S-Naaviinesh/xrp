import React from 'react';



const Toml = () => {
    return (
      
        <div >

[METADATA]
modified = 2021-06-14T00:00:00.000Z
expires = 2021-06-30T00:00:00.000Z

[[VALIDATORS]]
network = "main"
owner_country = "myr"
server_country = "us"
unl = "https://vl.ripple.com"

[[VALIDATORS]]
network = "testnet"
owner_country = "myr"
server_country = "us"
unl = "https://vl.testnet.rippletest.net"

[[ACCOUNTS]]
address = "rGJTFYUudEBKHc5C47996kVdCFjUo83wNm"
desc = "51% owned by V.S.Naaviinesh"

[[SERVERS]]
json_rpc = "https://s1.ripple.com:51234/"
ws = "wss://s1.ripple.com/"
peer = "https://s1.ripple.com:51235/"
desc = "General purpose server cluster"

[[SERVERS]]
json_rpc = "https://s2.ripple.com:51234/"
ws = "wss://s2.ripple.com/"
peer = "https://s2.ripple.com:51235/"
desc = "Full-history server cluster"

[[SERVERS]]
json_rpc = "https://s.testnet.rippletest.net:51234/"
ws = "wss://s.testnet.rippletest.net:51233/"
peer = "https://s.testnet.rippletest.net:51235/"
network = "testnet"
desc = "Test Net public server cluster"

[[PRINCIPALS]]
name = "V.S.Naaviinesh" # Primary spec author
email = "naaviinesh.v.s@gmail.com" 

[[CURRENCIES]]
code = "XVM"
issuer = "rnMAHMtRuGg483Xo4r6XJjrifpm7ukAGaE"
network = "main"
display_decimals = 2
symbol = "🍔" 
# End of file
            
        </div>
    )
}

export default Toml;