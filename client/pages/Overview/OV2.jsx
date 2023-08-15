import React from 'react'
import UnitNav from '../../components/UnitNav.jsx';

export default function OV3 () {

  const links = ['/Overview','OV2','What are Transactions?','/OV3'];

  return (
    <>

    <UnitNav links={links}/>

    <div className='instructionBox'>

      <div>

      <h2>What Are Database Transactions?</h2>
      <p>
        In the simplest terms, a database transaction is like a digital "mission" that a computer performs to complete a set of related tasks in a reliable and safe manner. Imagine you have to withdraw money from an ATM; the entire process - from entering your PIN to receiving cash - is a transaction. Database transactions work in a similar way, grouping multiple database operations together and ensuring they all succeed or fail as a single unit.
      </p>

      <h3>Why Are Transactions Important?</h3>
      <p>
        Imagine a situation where you book a flight ticket online, and just before you make the payment, the website crashes. Disaster, right? Without transactions, the database would be left in an inconsistent state, and you might end up losing your money without getting a ticket. Transactions prevent such chaos by maintaining the "all-or-nothing" principle. Either every task in the transaction succeeds, or none of them does.
      </p>

      <h3>The ACID Properties:</h3>
      <p>
        Transactions are built on four fundamental principles, commonly known as the ACID properties:
      </p>
      <ol>
        <li>
          <strong>Atomicity:</strong> This means that a transaction is treated as a single, indivisible unit. All its operations either happen together or not at all. If any part of the transaction fails, the entire transaction is rolled back to its original state.
        </li>
        <li>
          <strong>Consistency:</strong> Transactions ensure that the database moves from one valid state to another. It means that the data meets certain constraints, rules, and relationships defined by the database schema.
        </li>
        <li>
          <strong>Isolation:</strong> Transactions run independently of each other, isolated from interference. Changes made by one transaction are not visible to other transactions until they are committed.
        </li>
        <li>
          <strong>Durability:</strong> Once a transaction is committed and successful, its changes become permanent, even in the face of system failures. The data remains in the database even if the system crashes.
        </li>
      </ol>

      <h3>Examples in Real Life:</h3>
      <p>
        Let's relate this to something you encounter every day: online shopping. When you add items to your cart, update quantities, and proceed to checkout, these actions are part of a transaction. If any step fails, the entire transaction rolls back to avoid incorrect billing or inventory discrepancies.
      </p>

      <h3>Conclusion:</h3>
      <p>
        Understanding database transactions is crucial in the world of computing, even for non-technical students. They ensure data integrity, prevent data loss, and maintain consistency within databases. The ACID properties serve as the guiding principles, enabling secure and reliable data management in various applications.
      </p>

      <p>
        Next time you hear the term "database transactions," you can confidently grasp its significance and appreciate the role it plays in making our digital lives smoother and more secure. Stay curious and keep exploring the fascinating world of technology!
      </p>

      <p>
        Happy learning!
      </p>

      </div>
      </div>
    </>
  );
};

