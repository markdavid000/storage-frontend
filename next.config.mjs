/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    CONTRACT_ADDRESS: "0xAA9c969C75B8a0B9bCB4921735e2D71b79394B13",
    ABI: [
      {
        inputs: [
          {
            internalType: "string",
            name: "_msg",
            type: "string",
          },
        ],
        name: "setMessage",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "address",
            name: "_owner",
            type: "address",
          },
        ],
        stateMutability: "nonpayable",
        type: "constructor",
      },
      {
        inputs: [],
        name: "getMessage",
        outputs: [
          {
            internalType: "string",
            name: "",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
    ],
  },
};

export default nextConfig;
