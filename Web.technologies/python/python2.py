import numpy as np

def sum_S1(n, dtype=np.float64):
    total = dtype(0)
    for k in range(1, n + 1):
        total += dtype(1) / (dtype(4) * np.sqrt(dtype(k)))
    return total

def sum_S2(n, dtype=np.float64):
    total = dtype(0)
    for k in range(n, 0, -1):
        total += dtype(1) / (dtype(4) * np.sqrt(dtype(k)))
    return total

powers = [4, 5, 6]
for i in powers:
    n = 10**i
    print(f"n = 10^{i}")

    S1_float32 = sum_S1(n, dtype=np.float32)
    S2_float32 = sum_S2(n, dtype=np.float32)
    diff_float32 = abs(S1_float32 - S2_float32)
    rel_diff_float32 = diff_float32 / max(abs(S1_float32), abs(S2_float32))
    
    S1_float64 = sum_S1(n, dtype=np.float64)
    S2_float64 = sum_S2(n, dtype=np.float64)
    diff_float64 = abs(S1_float64 - S2_float64)
    rel_diff_float64 = diff_float64 / max(abs(S1_float64), abs(S2_float64))

    print(f"Float32: S1 = {S1_float32:.6f}, S2 = {S2_float32:.6f}, |S1 - S2| = {diff_float32:.6e}, RelDiff = {rel_diff_float32:.6e}")
    print(f"Float64: S1 = {S1_float64:.6f}, S2 = {S2_float64:.6f}, |S1 - S2| = {diff_float64:.6e}, RelDiff = {rel_diff_float64:.6e}")
    print("-" * 50)