// In Rust, a mod.rs file is used to define and organize modules within a directory.
// Rust’s module system is hierarchical, and mod.rs acts as the entry point for modules within a directory.
// It defines which other files are part of the module and can be used to re-export functions, structs, or other modules.

// This file also contains logic for the Factory pattern.
// We have a single entry point for construction, and the factory will spit out the correct struct we need for our parameters.

use crate::to_do::enums::TaskStatus;
use crate::to_do::structs::done::Done;
use crate::to_do::structs::pending::Pending;

pub mod enums;
pub mod structs;
pub mod traits;

pub enum ItemType {
    Pending(Pending),
    Done(Done)
}

pub fn to_do_factory(title: &str, status: TaskStatus) -> ItemType {
    match status {
        TaskStatus::DONE => ItemType::Done(Done::new(title)),
        TaskStatus::PENDING => ItemType::Pending(Pending::new(title))
    }
}
