#!/bin/bash
set -e


function test_test_route {
    echo "-----------------------"
    echo "🚀 test 1 => test_route "
    curl -so response.json -X GET http://localhost:3000/test
    response=$(awk 'NR==1 {print $0}' response.json)
    is_message=$(echo $response | grep message)
    if [ -z "$is_message" ]; then 
        echo "❌ test failed"  
    else 
        echo "✅ test succeeded"
        cat response.json | jq '.message'
    fi
    echo "-----------------------"
}

test_test_route