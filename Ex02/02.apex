public class Bololo {
@AuraEnabled(cacheable=true)
    public static List<Opportunity> Opp5() {
        return [
            SELECT Id, Name, Amount, StageName,CreateDate__c
            FROM Opportunity
            WHERE stageName like 'Negotiation/Review'
            ORDER BY CreateDate__c DESC
            LIMIT 5
        ];
}
}
