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

function tenderApplyTransaction(tenderApplyTransaction) {
  tenderApplyTransaction.tender.appliedCompnies.push(tenderApplyTransaction.company);
  tenderApplyTransaction.tender.proposedAmmounts.push(tenderApplyTransaction.proposedAmmount);

  return getAssetRegistry('api.Tender')
    .then (function (assestRegistery) {
    return assestRegistery.update(tenderApplyTransaction.tender);
    })
}

// Tender Approval Transaction
/**
* @param {test.TenderAllocationTransaction} tenderAllocationTransaction
* @transaction
*/

function tenderAllocationTransaction(tenderAllocationTransaction) {
  if (time.now > tenderAllocationTransaction.ofTender.deadline) {
    tenderAllocationTransaction.ofTender.isOpen = fasle;
    var proposedAmmountArr = tenderAllocationTransaction.ofTender.proposedAmmounts;
    var appliedCompniesArr = tenderAllocationTransaction.ofTender.appliedCompnies;
    var maxProposedAmmount = getMaxOfArray(proposedAmmountArr);
    var indexOfMaxValue = a.reduce((iMax, x, i, proposedAmmountArr) => x > proposedAmmountArr[iMax] ? i : iMax, 0);
    var allocatedCompany = appliedCompniesArr[indexOfMaxValue];
    tenderAllocationTransaction.ofTender.allocatedCompany = allocatedCompany;
    tenderAllocationTransaction.ofTender.isAllocated = true

    return getAssetRegistry('api.Tender')
      .then (function (assestRegistery) {
      return assestRegistery.update(tenderAllocationTransaction.tender);
      })
  }
}

function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
