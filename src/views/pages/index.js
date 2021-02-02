import TestAutomationApproach from './TestAutomationApproach'
import WhyTestAutomation from './WhyTestAutomation'
import TraditionalTestAutomation from './TraditionalTestAutomation'
import ModernTestAutomation from './ModernTestAutomation'
import FastFeedback from './FastFeedback'
import TestReporting from './TestReporting'
import RegressionTesting from './RegressionTesting'
import TypicalWorkflow from './TypicalWorkflow'
import ShiftTheOrder from './ShiftTheOrder'
import AcceptanceCriteria from './AcceptanceCriteria'
import ValueOfQA from './ValueOfQA'
import OldSchoolRefinement from './OldSchoolRefinement'
import NewSchoolRefinement from './NewSchoolRefinement'
import OldDoD from './OldDoD'
import Shippable from './Shippable'

const pages = [
  {
    name: 'test automation approach',
    meta: {
      title: 'Test Automation Approach'
    },
    component: TestAutomationApproach
  },
  {
    name: 'why test automation',
    meta: {
      title: 'Why Test Automation'
    },
    component: WhyTestAutomation
  },
  {
    name: 'traditional test automation',
    meta: {
      title: 'Traditional Test Automation'
    },
    component: TraditionalTestAutomation
  },
  {
    name: 'modern test automation',
    meta: {
      title: 'Modern Test Automation'
    },
    component: ModernTestAutomation
  },
  {
    name: 'fast feedback',
    meta: {
      title: 'Fast Feedback'
    },
    component: FastFeedback
  },
 
  {
    name: 'test reporting',
    meta: {
      title: 'Test Reporting'
    },
    component: TestReporting
  },
  {
    name: 'regression testing',
    meta: {
      title: 'Regression Testing'
    },
    component: RegressionTesting
  },
  {
    name: 'typical workflow',
    meta: {
      title: 'Typical Workflow'
    },
    component: TypicalWorkflow
  },
  {
    name: 'shift the order',
    meta: {
      title: 'Shift the order'
    },
    component: ShiftTheOrder
  },
  {
    name: 'acceptance criteria',
    meta: {
      title: 'Acceptance Criteria'
    },
    component: AcceptanceCriteria
  },
  {
    name: 'value of QA',
    meta: {
      title: 'Value of QA'
    },
    component: ValueOfQA
  },
  {
    name: 'old school refinement',
    meta: {
      title: 'Old School Refinement'
    },
    component: OldSchoolRefinement
  },
  {
    name: 'new school refinement',
    meta: {
      title: 'New School Refinement'
    },
    component: NewSchoolRefinement
  },
  {
    name: 'old definition of done',
    meta: {
      title: 'Old Definition of Done'
    },
    component: OldDoD
  },
  {
    name: 'shippable',
    meta: {
      title: 'Shippable'
    },
    component: Shippable
  },
]

pages.forEach((page, index) => page.path = `${index + 1}`)

export default pages