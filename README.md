# Supply chain and data auditing

This project implements an Ethereum DApp to implement a simple coffee supply chain from farm to consumer. 

## Models
This application tracks the state of coffee through 4 actors:
* Farmer:  grows the coffee, processes the beans, packs for shipping and offers it for sale
* Distributor: buys coffee from farmer and sells to retailer
* Retailer : buys coffee from distributor for sale to the consumer
* Consumer : buys coffee from retailer

The following activity diagram illustrates the movement of coffee through these actors:

![activity diagram](images/activity.jpg)

The following sequence diagram shows the contract invocations by these actors:

![sequence diagram](images/sequence.jpg)

The following state diagram shows more clearly the contract invocations, as well as the prerequisites for each:

![state diagram](images/state.jpg)
