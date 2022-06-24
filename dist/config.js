let mainnet = false;
const CONTRACT_NAME_TESTNET = "hc.jeph.testnet";
const CONTRACT_NAME_MAINNET = "";
export function getConfig(env) {
    switch (env) {
        case 'mainnet':
        case 'production':
            return {
                networkId: 'mainnet',
                nodeUrl: 'https://rpc.mainnet.near.org',
                contractName: CONTRACT_NAME_MAINNET,
                walletUrl: 'https://wallet.near.org',
                helperUrl: 'https://helper.mainnet.near.org'
            };
        case 'development':
        case 'testnet':
            return {
                networkId: 'default',
                nodeUrl: 'https://rpc.testnet.near.org',
                contractName: CONTRACT_NAME_TESTNET,
                walletUrl: 'https://wallet.testnet.near.org',
                helperUrl: 'https://helper.testnet.near.org'
            };
        default:
            throw Error(`Unconfigured environment '${env}'. Can be configured in src/config.ts.`);
    }
}
//export default getConfig(process.env.NODE_ENV || 'testnet');
