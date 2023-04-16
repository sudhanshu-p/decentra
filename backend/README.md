# Workflow of the Backend:
The backend is split roughly into 2 pieces, the Database and the API Routes.

## Database
The app uses MongoDB as the database and uses Expressjs to make it functional. The database has 5 Schemas, ClassroomSchema, CompetitionSchema, OrganizationSchmea, studentSchema and walletschema.

Here's their description:

<pre>
----> ClassroomSchema
  |-> Title:String, 
  |-> Details:String,
  |-> JoinCode:Number,
  |-> ParticipantStudent:StudentSchema,
  |-> Organization:OrganizationSchema
  
----> CompetitionSchema
  |-> Title:String,
  |-> Details:String,
  |-> ParticipantStudents:StudentSchema,
  |-> Organization:OrganizationSchema,
  |-> JoinCode:Number,
  |-> Image:String
  
----> OrganizationSchema
  |-> Name:String,
  |-> Email:String,
  |-> Wallet:String,
  |-> Mobile:String,
  |-> Competitons:CompetitionSchema,
  |-> Classroom:ClassroomSchema
  
----> StudentSchema
  |-> Name:String,
  |-> Email:String,
  |-> Mobile:String,
  |-> College:String,
  |-> Wallet:String,
  |-> Competitions:[{CompetitionSchema}],
  |-> Classrooms:[{ClassroomSchema}]
  
----> WalletSchema
  |-> address:String
  
## Routes
The app has various routes for get and post operations on this Schema.
