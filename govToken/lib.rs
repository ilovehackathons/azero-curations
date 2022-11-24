#![cfg_attr(not(feature = "std"), no_std)]
#![feature(min_specialization)]
        
#[openbrush::contract]
pub mod my_psp22 {
    // imports from ink!
	use ink_storage::traits::SpreadAllocate;
	use openbrush::contracts::ownable::*;
    
    // imports from openbrush
	use openbrush::traits::Storage;
	use openbrush::contracts::psp22::extensions::mintable::*;
    
    #[ink(storage)]
    #[derive(Default, SpreadAllocate, Storage)]
    pub struct govToken {
    	#[storage_field]
		psp22: psp22::Data,
		#[storage_field]
		ownable: ownable::Data,
    }
    
    // Section contains default implementation without any modifications
	impl PSP22 for govToken {}
	impl Ownable for govToken {}
	impl PSP22Mintable for govToken {
		#[ink(message)]
		#[openbrush::modifiers(only_owner)]
		fn mint(
            &mut self,
            account: AccountId,
			amount: Balance
        ) -> Result<(), PSP22Error> {
			self._mint(account, amount)
		}
	}
    
    impl govToken {
        #[ink(constructor)]
        pub fn new(initial_supply: Balance) -> Self {
            ink_lang::codegen::initialize_contract(|_instance: &mut Contract|{
				_instance._mint(_instance.env().caller(), initial_supply).expect("Should mint"); 
				_instance._init_with_owner(_instance.env().caller());
			})
        }
    }
}