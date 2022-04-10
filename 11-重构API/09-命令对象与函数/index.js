// 复杂的score函数,分解为命令对象
function score(candidate, medicalExam, scoringGuide) {
  return new Scorer(candidate, medicalExam, scoringGuide).excute();
}

class Scorer {
  constructor(candidate, medicalExam, scoringGuide) {
    this.candidate = candidate;
    this.medicalExam = medicalExam;
    this.scoringGuide = scoringGuide;
  }

  excute() {
    this.result = 0;
    this.healthLevel = 0;
    this.highMedicalRiskFlag = false;

    this.scoreSmoking();
    this.certificationGrade = "regular";
    if (this.scoringGuide.stateWithLowCertification(this.candidate.originState)) {
      this.certificationGrade = "low";
      this.result -= 5;
    }
    // lots more code like this
    this.result -= Math.max(this.healthLevel - 5, 0);
    return this.result;
  }

  scoreSmoking() {
    if (this.medicalExam.isSmoker) {
      this.healthLevel += 10;
      this.highMedicalRiskFlag = true;
    }
  }
}
// 简单的类转化为函数
function chargeCalculator(customer, usage, provider) {
  const baseCharge = customer.baseRate * usage;
  return baseCharge + provider.connectionCharge;
}