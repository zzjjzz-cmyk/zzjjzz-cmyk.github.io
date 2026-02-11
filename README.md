# Jingzhe Zhou
# The Legend of Zelda – First Dungeon Recreation (Unity)

A full recreation of the first dungeon from the original *The Legend of Zelda*, rebuilt in Unity as a top-down 2D action-adventure experience. Our team aimed to preserve the mechanical authenticity of the NES classic while extending it with new systems and polished enemy behaviors.

**Course:** EECS 494 – Introduction to Computer Game Design  
**Institution:** University of Michigan  

---

## My Role – Combat Systems & Enemy Implementation

I focused primarily on core combat systems, enemy behaviors, and gameplay polish across all development stages.

---

## Milestone Phase – Core Combat Foundations

During the milestone phase, I established the foundation of the combat framework:

- Implemented the player health system
- Designed and coded knockback behavior upon taking damage
- Built damage feedback systems including sprite flashing and invincibility frames
- Implemented the Stalfos enemy with directional logic
- Developed and finalized invincibility state handling for consistent combat flow

This stage defined the interaction rules between the player and hostile entities.

---

## Alpha Phase – Enemy Systems Expansion

In the alpha stage, I implemented and integrated multiple enemy types:

- **Keese** – airborne movement with acceleration control
- **Gel** – grid-based step movement behavior
- **Blade Trap** – reactive linear hazard with high-speed targeting
- **Aquamentus (Boss)** – state-machine-driven boss behavior with projectile logic
- Implemented the full game termination and game-over interface

Each enemy required distinct movement patterns, collision logic, and behavioral states while maintaining gameplay authenticity.

---

## Gold Phase – Polish, Balancing & Stability

During the Gold phase, I focused on refinement and production-level polish:

- Standardized enemy behavior logic for consistency
- Tuned movement speeds and collision timing
- Fixed edge-case bugs in knockback and invincibility handling
- Refined hit detection and visual feedback clarity
- Supported integration and stability for the team’s custom feature: keese mode

This phase emphasized responsiveness, fairness, and system cohesion.

---

## Technical Details

- **Engine:** Unity  
- **Language:** C#  
- **Version Control:** Git  
- **Project Management:** Jira  

### System Architecture Highlights

- State-based enemy logic systems  
- Rigidbody-driven knockback physics  
- Coroutine-based invincibility handling  
- Raycast-based hazard detection  
- Boss state machine implementation  

---

## What I Learned

This project strengthened my understanding of:

- Combat readability and player feedback design  
- Structuring modular enemy AI systems  
- Debugging physics and collision edge cases  
- Iterative gameplay balancing  
- Coordinating system development within a team milestone structure  

---

## Demo

https://zzjjzz716.itch.io/legend-of-zelda-replication-with-innovation
