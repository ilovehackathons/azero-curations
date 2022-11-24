# AzeroCurations

The `master` branch only contains the backend code. Check the `main` branch for the full code. The frontend is deployed to https://azero-curations.vercel.app/

azero.curations – Zero-Knowledge negative reputation (Hackathon)
**ZK Decentralised posts for DAOs

## Getting Started

Check https://paritytech.github.io/ink/ for the commands relative to smart contracts 

## Development

We have developed a voting system where the user is being casted by votes from anonymous voters. 

We have created a smart **governance** contract using ink. 
We have created the token representing the votes **psp22token**
We are using the blender to allow users to anonymise their votes. 


Architecture : 

1/ register a new token in the contract (copy TokenID). 
2/ Deposit token in the contract (use CLI  - > generates Zk-Proofs) 
3/ Mapping : TokenID is that corresponds to a given token. 
4/ voting/DAO contract should accept transactions coming from the blender (voting = withdrawal from the blender).
5/ Blender contract : 5ExdeNmh3c7kXpx9uE4M9T63z19KZNAPSyGMfE5zPXeBUryj


``` cargo +nightly contract build ``` :
Compiles the contract into optimized WebAssembly bytecode, generates metadata for it, and bundles both together in a <name>.contract file, which you can use for deploying the contract on-chain.
  
 
## Devpost Description

 
### Inspiration

  We have being inspired by Vitalik article ZK negative reputation : https://vitalik.ca/general/2022/06/15/using_snarks.html
  
### What it does
  
  
### How we built it
  
  We have used rust for smart contracts. 
  
  
  
  
#### Frontend

  
  

