ANSIBLE_DIR:=./ansible
CYAN_COLOR:=\033[1;36m
NO_COLOR:=\033[0m
.DEFAULT_GOAL:=help 

.PHONY: help ansible

help: ## shows this help
	@grep -E "[a-z_-]+: ## .*" ${MAKEFILE_LIST} | sort | awk 'BEGIN { FS = "##" }; { printf "\n--------------\n${CYAN_COLOR}%50-s${NO_COLOR}%s", $$1, $$2}'
	@echo "\n--------------"
ansible: ## run ansible instructions 
	ansible-playbook -i ${ANSIBLE_DIR}/hosts.ini ${ANSIBLE_DIR}/site.yml
