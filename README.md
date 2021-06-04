# About this PoC

In this repository you'll find one way to implement a custom passport based authentication strategy 
in a CAP project. It demonstrates:

- three different users with three different levels of access
- access management and security at the table entity level
- access management and security at the service level
- custom passport strategy, can be based on any of the existing strategies
- integration tests for all the above

# Access management

### Application security has various layers

- Authentication, or the notion that you need to have a valid user and password
- Authorisation, or the notion that you need to have a particular role to access particular services. This has 3 levels:
  - Access to a particular service based on your role
  - Access to a particular enddpoint on that service based on your role
  - Access to particular rows of information inside an endpoint based on your role

To demonstrate these, there is provided a work order service. 

- Without a valid login, the user is rejected 
- With a valid login but no roles and attributes assigned, the user gets no information out of the service
- With a valid login and an `OrderUser` role, the user gets information only about the assigned customer
- With a valid login and an `OrderAdmin` role, the user gets information for all customers