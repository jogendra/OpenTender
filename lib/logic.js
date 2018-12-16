/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';
/**
 * Write your transction processor functions here
 */


 // Tender Apply Transaction
 /**
 * @param {test.TenderApplyTransaction} tenderApplyTransaction
 * @transaction
 */

async function TenderApplyTransaction(tenderApplyTransaction) {
  // Assets and Participants registeries
  let tenderReg = await getAssetRegistry('test.Tender');
  let companyReg = await getParticipantRegistry('test.TenderCompany');

  // Initialize the empty arrays
  tenderApplyTransaction.tender.appliedCompnies = []
  tenderApplyTransaction.tender.proposedAmmounts= []

  // Pushing values to the arrays
  tenderApplyTransaction.tender.appliedCompnies.push(tenderApplyTransaction.company);
  tenderApplyTransaction.tender.proposedAmmounts.push(tenderApplyTransaction.proposedAmmount);
  tenderApplyTransaction.company.isAuth = true

  // Update the registery and participate
  await tenderReg.update(tenderApplyTransaction.tender)
  await companyReg.update(tenderApplyTransaction.company)
}

// Tender Approval Transaction
/**
* @param {test.TenderAllocationTransaction} tenderAllocationTransaction
* @transaction
*/

async function TenderAllocationTransaction(tenderAllocationTransaction) {
  // Assets registeries
  let tenderReg = await getAssetRegistry('test.Tender');

  var nowDate = new Date();
  if (nowDate > tenderAllocationTransaction.ofTender.deadline) {
    tenderAllocationTransaction.ofTender.isOpen = false;
    var proposedAmmountArr = tenderAllocationTransaction.ofTender.proposedAmmounts;
    var appliedCompniesArr = tenderAllocationTransaction.ofTender.appliedCompnies;
    var maxProposedAmmount = getMaxOfArray(proposedAmmountArr);
    var indexOfMaxValue = proposedAmmountArr.reduce((iMax, x, i, proposedAmmountArr) => x > proposedAmmountArr[iMax] ? i : iMax, 0);
    var allocatedCompany = appliedCompniesArr[indexOfMaxValue];
    tenderAllocationTransaction.ofTender.allocatedCompany = allocatedCompany;
    tenderAllocationTransaction.ofTender.isAllocated = true

    // Update the registery and participate
    await tenderReg.update(tenderAllocationTransaction.tender)
  }
}

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
