$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/singtel/features/todos.feature");
formatter.feature({
  "name": "Manage todo list as a todoMVC user",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on todoMVC landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "TodoSteps.redirect_ToLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add and remove items from todo list",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I add following items in todo list:",
  "rows": [
    {
      "cells": [
        "Lunch"
      ]
    },
    {
      "cells": [
        "Grocery"
      ]
    },
    {
      "cells": [
        "Laundry"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "TodoSteps.addItems_ToList(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect \"3\" items added in the todo list",
  "keyword": "Then "
});
formatter.match({
  "location": "TodoSteps.verify_ItemsInList(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I remove following items from todo list",
  "rows": [
    {
      "cells": [
        "Laundry"
      ]
    },
    {
      "cells": [
        "Lunch"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "TodoSteps.removeItems_FromList(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect \"1\" items added in the todo list",
  "keyword": "Then "
});
formatter.match({
  "location": "TodoSteps.verify_ItemsInList(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on todoMVC landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "TodoSteps.redirect_ToLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Mark items as completed from todo list",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I add following items in todo list:",
  "rows": [
    {
      "cells": [
        "Lunch"
      ]
    },
    {
      "cells": [
        "Grocery"
      ]
    },
    {
      "cells": [
        "Laundry"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "TodoSteps.addItems_ToList(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I mark following items as completed from todo list",
  "rows": [
    {
      "cells": [
        "Lunch"
      ]
    },
    {
      "cells": [
        "Laundry"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TodoSteps.markItems_Completed(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Completed\" section",
  "keyword": "And "
});
formatter.match({
  "location": "TodoSteps.click_OnSection(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect following items to be available in \"Completed\" section",
  "rows": [
    {
      "cells": [
        "Lunch"
      ]
    },
    {
      "cells": [
        "Laundry"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TodoSteps.verifyItems_InSection(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on todoMVC landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "TodoSteps.redirect_ToLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Move items from completed to active section",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I add following items in todo list:",
  "rows": [
    {
      "cells": [
        "Study"
      ]
    },
    {
      "cells": [
        "Cycling"
      ]
    },
    {
      "cells": [
        "Sleep"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "TodoSteps.addItems_ToList(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I mark following items as completed from todo list",
  "rows": [
    {
      "cells": [
        "Study"
      ]
    },
    {
      "cells": [
        "Cycling"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TodoSteps.markItems_Completed(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Completed\" section",
  "keyword": "And "
});
formatter.match({
  "location": "TodoSteps.click_OnSection(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I move following items from \"Completed\" to \"Active\" section",
  "rows": [
    {
      "cells": [
        "Study"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TodoSteps.move_Items(String,String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Active\" section",
  "keyword": "And "
});
formatter.match({
  "location": "TodoSteps.click_OnSection(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect following items to be available in \"Active\" section",
  "rows": [
    {
      "cells": [
        "Study"
      ]
    },
    {
      "cells": [
        "Sleep"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TodoSteps.verifyItems_InSection(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on todoMVC landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "TodoSteps.redirect_ToLandingPage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Clear completed items from todo list",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I add following items in todo list:",
  "rows": [
    {
      "cells": [
        "Movie"
      ]
    },
    {
      "cells": [
        "Gym"
      ]
    },
    {
      "cells": [
        "Lunch"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "TodoSteps.addItems_ToList(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I mark following items as completed from todo list",
  "rows": [
    {
      "cells": [
        "Gym"
      ]
    },
    {
      "cells": [
        "Lunch"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "TodoSteps.markItems_Completed(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"Completed\" section",
  "keyword": "And "
});
formatter.match({
  "location": "TodoSteps.click_OnSection(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I clear completed items",
  "keyword": "And "
});
formatter.match({
  "location": "TodoSteps.clear_completedItems()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on \"All\" section",
  "keyword": "And "
});
formatter.match({
  "location": "TodoSteps.click_OnSection(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I expect following items to be available in \"All\" section",
  "rows": [
    {
      "cells": [
        "Movie"
      ]
    }
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "TodoSteps.verifyItems_InSection(String,DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});